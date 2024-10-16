import DashboardCard from '@/components/dashboard/DashboardCard';
import PostsTable from '@/components/posts/PostsTable';
import AnalyticsChart from '@/components/dashboard/AnalyticsChart';
import { Check, Ban, Cpu, RotateCw, SquareChevronRight } from 'lucide-react';
export default function Home() {
  return (
    <>
      <div>
        <SquareChevronRight className='text-slate-500' size={28} />
        <h1 className='text-5xl font-bold uppercase'>Job Stats</h1></div>
      <div className='flex flex-col md:flex-row justify-between gap-5 p-3'>


        <DashboardCard
          title='Completed'
          count={5}
          icon={<Check className='text-slate-500' size={72} />}
        />
        <DashboardCard
          title='Failed'
          count={2}
          icon={<Ban className='text-slate-500' size={72} />}
        />
        <DashboardCard
          title='Restarted'
          count={3}
          icon={<RotateCw className='text-slate-500' size={72} />}
        />
        <DashboardCard
          title='In process'
          count={1}
          icon={<Cpu className='text-slate-500' size={72} />}
        />
      </div>
      <div>

        <button className='bg-green-800 hover:bg-blue-700 text-white font-bold p-3 m-2 rounded text-xs w-32'>
          Start
        </button>
        <button className='bg-red-800 hover:bg-blue-700 text-white font-bold p-3 m-2 rounded text-xs w-32'>
          Stop
        </button>
      </div>
      <PostsTable title='Job and Event triggers' limit={3} />
    </>
  );
}
