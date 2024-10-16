import DashboardCard from '@/components/dashboard/DashboardCard';
import PostsTable from '@/components/posts/PostsTable';
import AnalyticsChart from '@/components/dashboard/AnalyticsChart';
import { Folder, MessageCircle, Newspaper, User } from 'lucide-react';

export default function Home() {
  return (
    <>
      <div className='flex flex-col md:flex-row justify-between gap-5 p-5'>
        <DashboardCard
          title='Users'
          count={5}
          icon={<User className='text-slate-500' size={72} />}
        />
        <DashboardCard
          title='Workflows'
          count={2}
          icon={<Newspaper className='text-slate-500' size={72} />}
        />
        <DashboardCard
          title='Resources'
          count={3}
          icon={<Folder className='text-slate-500' size={72} />}
        />
        <DashboardCard
          title='Jobs'
          count={0}
          icon={<MessageCircle className='text-slate-500' size={72} />}
        />
      </div>
      <AnalyticsChart />
      {/* <PostsTable title='Event stream' limit={5} /> */}
    </>
  );
}
