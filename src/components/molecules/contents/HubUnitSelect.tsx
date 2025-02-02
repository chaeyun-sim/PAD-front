import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/Select';
import { cn } from '@/utils/cn';
import useHubSearchStore from '@/store/hubSeartchStore';
import { roleItems, roleValueToKeyMap } from '@/constants/hub/roleItems';

const jobRoles: Record<'Programmer' | 'Artist' | 'Designer', string[]> = {
  Programmer: [
    '서버/백엔드 개발자',
    '프론트엔드 개발자',
    '웹 풀스택 개발자',
    '안드로이드 개발자',
    'IOS 개발자',
    '크로스플랫폼 앱개발자',
    '게임 클라이언트 개발자',
    '게임 서버 개발자',
    'DBA',
    '빅데이터 엔지니어',
    '인공지능/머신러닝',
    'devops/시스템 엔지니어',
    '정보보안 담당자',
    'QA 엔지니어',
    '개발 PM',
    'HW/임베디드',
    'SW/솔루션',
    '웹퍼블리셔',
    'VR/AR/3D',
    '블록체인',
  ],
  Artist: [
    '클래식',
    'JAZZ',
    'CCM',
    '팝',
    '발라드',
    '블루스',
    '힙합',
    '컨트리 뮤직',
    '포크 음악',
    '레게',
    '디스코',
    '록 음악',
    '전자 음악',
    '트로트',
    '일렉트로닉 뮤직',
    '로큰롤',
  ],
  Designer: [
    '패키지 디자이너',
    '편집 디자이너',
    '웹 디자이너',
    '전시 디자이너',
    '컬러리스트',
    '일러스트레이터',
    '캐릭터 디자이너',
    'UI/UX 디자이너',
    '광고 디자이너',
    '영상 디자이너',
  ],
};

const HubUnitSelect = () => {
  const { role, unit, setUnit } = useHubSearchStore();

  const handleUnitChange = (value: string) => {
    const selectedUnit = value === 'All' ? null : value;
    setUnit(selectedUnit);
    console.log('선택된 유닛:', selectedUnit); // ✅ 선택된 유닛 콘솔 출력
  };

  const roleKey = role ? roleValueToKeyMap[role] : null;
  const units = roleKey ? jobRoles[roleKey] : [];

  return (
    <div className={cn('flex items-center gap-4')}>
      <Select onValueChange={handleUnitChange} disabled={!role}>
        <SelectTrigger className={cn('w-[180px] h-[44px] bg-white')}>
          <SelectValue placeholder={unit || '모집 단위'} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value='All'>전체</SelectItem> {/* ✅ 전체 옵션 추가 */}
            {units.length > 0 ? (
              units.map((unit) => (
                <SelectItem key={unit} value={unit}>
                  {unit}
                </SelectItem>
              ))
            ) : (
              <SelectItem value='disabled' disabled>
                직군을 먼저 선택하세요
              </SelectItem>
            )}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default HubUnitSelect;
