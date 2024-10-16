import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from '@/components/ui/table';
import Link from 'next/link';

import users from '@/data/users';
import { User } from '@/types/users';

interface UserTableProps {
  limit?: number;
  title?: string;
}

const UsersTable = ({ limit, title }: UserTableProps) => {
  // Sort users if needed in a pattern, maybe user created date
  const sortedUsers: User[] = users

  // Filter users to limit
  const filteredUsers = limit ? sortedUsers.slice(0, limit) : sortedUsers;

  return (
    <div className='mt-10'>
      <h3 className='text-2xl mb-4 font-semibold'>{title ? title : 'User Management'}</h3>
      <Table>
        <TableCaption>List of users</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Nickname</TableHead>
            <TableHead>First Name</TableHead>
            <TableHead>Last Name</TableHead>
            <TableHead>Bio data</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Professional</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.nickname}</TableCell>
              <TableCell>{user.first_name}</TableCell>
              <TableCell>{user.last_name}</TableCell>
              <TableCell>{user.bio}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.is_professional ? 'Yes':'No'}</TableCell>
              <TableCell>
                <Link href={`/users/edit/${user.id}`}>
                  <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs m-1 min-w-32'>
                    Edit
                  </button>
                </Link>
                <Link href={`/users/edit/${user.id}`}>
                  <button className='bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs m-1 min-w-32'>
                    Delete
                  </button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UsersTable;
