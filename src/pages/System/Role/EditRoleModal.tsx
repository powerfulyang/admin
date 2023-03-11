import { queryAllMenus } from '@/services/swagger/menuManage';
import {
  createRole,
  listPermissions,
  queryRoleById,
  updateRole,
} from '@/services/swagger/roleManage';
import {
  ProForm,
  ProFormCheckbox,
  ProFormText,
  ProFormTreeSelect,
} from '@ant-design/pro-components';
import { useMutation, useQuery } from '@umijs/max';
import { Modal, Spin } from 'antd';
import { atom, useAtom } from 'jotai';
import type { FC } from 'react';
import { useEffect } from 'react';

/**
 * @description 控制操作的主键ID, 用于新建和编辑
 * @description 用于编辑或查看时，传入主键ID
 * @description 用于新建时，传入主键ID为 0
 */
export const EditRoleModalAtom = atom<string | number | undefined>(undefined);

type Props = {
  onOk?: () => void;
};

export const EditRoleModal: FC<Props> = ({ onOk }) => {
  const [id, setId] = useAtom(EditRoleModalAtom);
  const [form] = ProForm.useForm();

  const { isFetching, data: initialValues } = useQuery({
    queryKey: ['EditRoleModal', id],
    enabled: !!id,
    queryFn() {
      return queryRoleById({
        id: id as string,
      });
    },
    initialData: {} as API.Role,
  });

  useEffect(() => {
    setTimeout(() => {
      form.resetFields();
    });
  }, [form, initialValues]);

  const mutation = useMutation({
    mutationFn(values: any) {
      if (id) {
        return updateRole({
          id,
          ...values,
        });
      }
      return createRole(values);
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
            content: '尚未保存，所有修改将丢失',
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
            onFinish={async (values) => {
              await mutation.mutateAsync(values);
              return true;
            }}
            layout="horizontal"
            submitter={false}
            form={form}
            initialValues={initialValues}
          >
            <ProFormText label="name" name="name" />
            <ProFormTreeSelect
              label="menus"
              name="menus"
              request={queryAllMenus}
              fieldProps={{
                fieldNames: {
                  label: 'name',
                  value: 'id',
                },
                treeCheckable: true,
                multiple: true,
                treeDefaultExpandAll: true,
                showCheckedStrategy: 'SHOW_ALL',
                treeCheckStrictly: true,
              }}
              normalize={(value) => {
                return value?.map((item: any) => item.value);
              }}
            />
            <ProFormCheckbox.Group
              label="permissions"
              name="permissions"
              request={listPermissions}
            />
          </ProForm>
        )}
      </Spin>
    </Modal>
  );
};
