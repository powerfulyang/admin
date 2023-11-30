import { PageContainer } from '@ant-design/pro-components';
import { useQuery } from '@umijs/max';
import { Image, Spin } from 'antd';
import type { FC } from 'react';
import { queryPublicAssetById } from '@/services/swagger/open';
import { AssetControllerPHashMap } from '@/services/swagger/asset';

const AssetImage: FC<{ id: number }> = ({ id }) => {
  const { data } = useQuery({
    queryKey: [queryPublicAssetById, id],
    enabled: !!id,
    queryFn: () => {
      return queryPublicAssetById({ id: String(id) });
    },
  });
  return <Image src={data?.objectUrl.thumbnail_300_} />;
};

const SimilarCheck = () => {
  const { isFetching, data } = useQuery({
    queryKey: [AssetControllerPHashMap],
    queryFn: () => {
      return AssetControllerPHashMap();
    },
  });
  return (
    <PageContainer>
      <Spin spinning={isFetching}>
        {Object.entries(data || {}).map(([key, value]) => {
          return (
            <div
              key={key}
              style={{
                display: 'flex',
              }}
            >
              <AssetImage id={Number(key)} />:
              {value.map((arr: number[]) => {
                if (arr.length) {
                  return arr
                    .filter((x) => x > 1)
                    .map((x) => {
                      return (
                        <div key={x}>
                          <AssetImage id={x} />
                        </div>
                      );
                    });
                }
                return null;
              })}
            </div>
          );
        })}
      </Spin>
    </PageContainer>
  );
};

export default SimilarCheck;
