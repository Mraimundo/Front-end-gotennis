
import { UserProfile } from '../components/UserProfile';
import { CustomLayout } from '../components/CustomLayout';
import { Activities } from '../components/Activities';

export default function ActivitiesPage() {
  return (
    <CustomLayout>
      <div>
        <UserProfile/>
        <Activities/>
      </div>
    </CustomLayout>
   
  )
}
