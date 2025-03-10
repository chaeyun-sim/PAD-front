import { fetchBestHubs } from '@/apis/hub.api';
import Avatar from '@/components/atoms/Avatar';
// import AvatarPopup from '@/components/molecules/AvatarPopup';
import { hubTagItemsColors } from '@/constants/hub/hubTagItems';
import { HubSideBarItemType } from '@/types/hubSideBarItem.type';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HubSideBarContents = () => {
  const navigate = useNavigate();

  const [data, setData] = useState<HubSideBarItemType[]>([]);
  // const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [isError, setError] = useState<string | null>(null);

  useEffect(() => {
    const getHubWeeklyBest = async () => {
      // setIsLoading(true);
      // setError(null);
      try {
        const response = await fetchBestHubs();

        setData(response.popularProjects);
      } catch (_) {
        // setError(err.message || '데이터를 불러오는 중 오류가 발생했습니다.');
      } finally {
        // setIsLoading(false);
      }
    };
    getHubWeeklyBest();
  }, []);

  return (
    <div className='flex flex-col bg-white rounded-[10px] py-[20px] px-[20px] gap-[30px]'>
      {data.map((item, index) => (
        <div
          key={item.projectId}
          className='flex flex-col w-full gap-[10px] cursor-pointer'
          onClick={() => navigate(`/projects/${item.projectId}`)}
        >
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-[10px]'>
              <div className='flex text-[12px]'>{index + 1}</div>
              {/* <AvatarPopup
                userId={item.user.userId}
                nickname={item.user.nickname}
                avatarSize='xxs'
                profileUrl={item.user.profileUrl || null}
                popupClassname='!left-[20px] top-3'
              /> */}
              <Avatar size='xxs' src={item.user.profileUrl || undefined} />
              <div className='flex text-[12px] font-medium'>
                {item.user.nickname}
              </div>
              <div className='flex text-[12px] font-semibold'>
                {item.user.role}
              </div>
            </div>
            <div className='flex'>
              <div
                className={`${hubTagItemsColors[item.hubType]} text-white text-[10px] px-[5px] py-[2px] rounded-full`}
              >
                {item.hubType}
              </div>
            </div>
          </div>
          <div className='ml-4 relative overflow-hidden h-[20px] group text-[14px] font-normal'>
            <div className='absolute whitespace-nowrap transition-transform duration-500 group-hover:animate-slide'>
              {item.title}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HubSideBarContents;
