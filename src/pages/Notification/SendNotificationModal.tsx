import { ProForm, ProFormText } from '@ant-design/pro-components';
import { useMutation } from '@umijs/max';
import { Modal } from 'antd';
import { atom, useAtom } from 'jotai';
import type { FC } from 'react';
import { useEffect } from 'react';
import { webPushSendNotification } from '@/services/swagger/webPush';

/**
 * @description 控制操作的主键ID, 用于新建和编辑
 * @description 用于编辑或查看时，传入主键ID
 * @description 用于新建时，传入主键ID为 0
 */
export const SendNotificationModalAtom = atom<string | number | undefined>(undefined);

type Props = {
  onOk?: () => void;
};

export const SendNotificationModal: FC<Props> = ({ onOk }) => {
  const [id, setId] = useAtom(SendNotificationModalAtom);
  const [form] = ProForm.useForm();

  useEffect(() => {
    if (id !== undefined) {
      form.setFieldsValue({
        subscribeId: id,
      });
    }
  }, [form, id]);

  const mutation = useMutation({
    async mutationFn(values: API.NotificationDto) {
      return webPushSendNotification(values);
    },
    onSuccess() {
      setId(undefined);
      onOk?.();
    },
  });

  return (
    <Modal
      title="发送通知"
      open={id !== undefined}
      onCancel={() => {
        setId(undefined);
      }}
      onOk={() => {
        form.submit();
      }}
      confirmLoading={mutation.isLoading}
      afterClose={() => {
        form.resetFields();
      }}
    >
      <ProForm
        onFinish={async (values) => {
          await mutation.mutateAsync(values);
          return true;
        }}
        layout="horizontal"
        submitter={false}
        labelCol={{
          span: 4,
        }}
        form={form}
      >
        <ProFormText name="subscribeId" hidden />
        <ProFormText
          label="title"
          name="title"
          rules={[
            {
              required: true,
            },
          ]}
        />
        <ProFormText
          label="message"
          name="message"
          rules={[
            {
              required: true,
            },
          ]}
        />
        <ProFormText label="icon" name="icon" />
        <ProFormText label="openUrl" name="openUrl" />
      </ProForm>
    </Modal>
  );
};
