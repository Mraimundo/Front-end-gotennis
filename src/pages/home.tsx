
import { Posts } from '../components/Posts';
import { CustomLayout } from '../components/CustomLayout';

export default function Home() {
  return (
    <CustomLayout>
      <div>
        <Posts/>
      </div>
    </CustomLayout>
   
  )
}
