import { UserProfile } from '../components/UserProfile';
import { CustomLayout } from '../components/CustomLayout';
import { Schedules } from '../components/schedules';

export default function ShedulesPage() {
  return (
    <CustomLayout>
      <div>
        <UserProfile/>
        <Schedules/>
      </div>
    </CustomLayout>
   
  )
}
