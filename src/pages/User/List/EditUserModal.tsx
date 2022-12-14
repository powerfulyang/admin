import { editUserById, queryUserById } from '@/services/swagger/userManage';
import { ProForm, ProFormText } from '@ant-design/pro-components';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Modal, Spin } from 'antd';
import { atom, useAtom } from 'jotai';
import type { FC } from 'react';
import { useEffect } from 'react';

/**
 * @description 控制操作的主键ID, 用于新建和编辑
 * @description 用于编辑或查看时，传入主键ID
 * @description 用于新建时，传入主键ID为 0
 */
export const EditUserModalAtom = atom<string | number | undefined>(undefined);

type Props = {
  onOk?: () => void;
};

export const EditUserModal: FC<Props> = ({ onOk }) => {
  const [id, setId] = useAtom(EditUserModalAtom);
  const [form] = ProForm.useForm<API.EditUserDto>();

  const { isFetching, data: initialValues } = useQuery({
    queryKey: ['EditUserModal', id],
    enabled: !!id,
    queryFn() {
      return queryUserById({
        id: id as string,
      });
    },
  });

  useEffect(() => {
    form.resetFields();
  }, [form, initialValues]);

  const mutation = useMutation({
    async mutationFn(values: any) {
      return editUserById(
        {
          id: id as string,
        },
        values,
      );
    },
    onSuccess() {
      setId(undefined);
      onOk?.();
    },
  });

  const title = id === 0 ? '新建' : '编辑';

  return (
    <Modal
      title={title}
      open={id !== undefined}
      onCancel={() => {
        // 判断 form 是否被修改过, 二次确认是否关闭
        const isTouched = form.isFieldsTouched();
        if (isTouched) {
          Modal.confirm({
            title: '确定要关闭吗?',
            content: '确认后，所有修改将丢失',
            onOk() {
              setId(undefined);
            },
          });
          // 一般不需要手动 destroy, 在切换路由的时候执行 Modal.destroyAll();
        } else {
          setId(undefined);
        }
      }}
      onOk={() => {
        form.submit();
      }}
      confirmLoading={mutation.isLoading}
    >
      <Spin spinning={isFetching}>
        {!isFetching && (
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
        )}
      </Spin>
    </Modal>
  );
};
