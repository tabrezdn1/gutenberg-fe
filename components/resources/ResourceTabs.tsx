import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import GithubForm from './GithubForm';
import FileUpload from './FileUpload';
import CustomData from './CustomData';

const ResourceTabs = () => {
  return (
    <Tabs defaultValue='github'>
      <TabsList className='grid w-full grid-cols-3'>
        <TabsTrigger value='github'>Github</TabsTrigger>
        <TabsTrigger value='file'>File Upload</TabsTrigger>
        <TabsTrigger value='custom'>Custom data</TabsTrigger>
      </TabsList>
      <TabsContent value='github'>
        <GithubForm />
      </TabsContent>
      <TabsContent value='file'>
        <FileUpload />
      </TabsContent>
      <TabsContent value='custom'>
        <CustomData />
      </TabsContent>
    </Tabs>
  );
};

export default ResourceTabs;
