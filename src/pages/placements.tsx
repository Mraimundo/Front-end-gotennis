import { UserProfile } from '../components/UserProfile';
import { CustomLayout } from '../components/CustomLayout';
import { Placements } from '../components/placements';

export default function PlacementsPage() {
  return (
    <CustomLayout>
      <div>
        <UserProfile/>
        <Placements/>
      </div>
    </CustomLayout>
   
  )
}
