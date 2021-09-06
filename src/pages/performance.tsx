
import { UserProfile } from '../components/UserProfile';
import { CustomLayout } from '../components/CustomLayout';
import { Performance } from '../components/Performance';

export default function PerformancePage() {
  return (
    <CustomLayout>
      <div>
        <UserProfile/>
        <Performance/>
      </div>
    </CustomLayout>
   
  )
}
