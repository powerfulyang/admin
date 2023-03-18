import { editUserById, queryUserById } from '@/services/swagger/userManage';
import { ProForm, ProFormText } from '@ant-design/pro-components';
import { useMutation, useQuery } from '@umijs/max';
import { Modal, Spin } from 'antd';
import { atom, useAtom } from 'jotai';
import type { FC } from 'react';

/**
 * @description 控制操作的主键ID, 用于新建和编辑
 * @description 用于编辑或查看时，传入主键ID
 * @description 用于新建时，传入主键ID为 0
 */
export const EditUserModalAtom = atom<string | undefined>(undefined);

type Props = {
  onOk?: () => void;
};

export const EditUserModal: FC<Props> = ({ onOk }) => {
  const [id, setId] = useAtom(EditUserModalAtom);
  const [form] = ProForm.useForm<API.EditUserDto>();

  const { isFetching, data: initialValues } = useQuery({
    queryKey: ['EditUserModal', id],
    queryFn() {
      if (id) {
        return queryUserById({
          id,
        });
      }
      return {};
    },
    onSettled() {
      // 需要在 render 完成后，再重置表单
      setTimeout(() => {
        form.resetFields();
      });
    },
  });

  const mutation = useMutation({
    async mutationFn(values: API.EditUserDto) {
      return editUserById(
        {
          id: id!,
        },
        values,
      );
    },
    onSuccess() {
      setId(undefined);
      onOk?.();
    },
  });

  const title = id === '' ? '新建' : '编辑';

  return (
    <Modal
      title={title}
      open={id !== undefined}
      onCancel={() => {
        const isTouched = form.isFieldsTouched();
        if (isTouched) {
          Modal.confirm({
            title: '确定要关闭吗?',
            content: '确认后，所有修改将丢失',
            onOk() {
              setId(undefined);
            },
          });
        } else {
          setId(undefined);
        }
      }}
      onOk={() => {
        form.submit();
      }}
      confirmLoading={mutation.isLoading}
      afterClose={() => {
        form.resetFields();
      }}
    >
      <Spin spinning={isFetching}>
        <ProForm
          key={id}
          onFinish={async (values) => {
            await mutation.mutateAsync(values);
            return true;
          }}
          layout="horizontal"
          submitter={false}
          form={form}
          initialValues={initialValues}
          labelCol={{
            span: 4,
          }}
        >
          <ProFormText label="email" name="email" />
          <ProFormText label="nickname" name="nickname" />
          <ProFormText label="bio" name="bio" />
        </ProForm>
      </Spin>
    </Modal>
  );
};
