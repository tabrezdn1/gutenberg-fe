import {
  Card, CardBody, Col, Row,
} from 'react-bootstrap'
import Profile from '@/app/(dashboard)/profile/profile'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/option'
// import { getDictionary } from '@/locales/dictionary'
import { User } from '../../../models/user'

function decodeJWT(string: string) {
  const arr = string.split('.')
  return { header: JSON.parse(atob(arr[0])), payload: JSON.parse(atob(arr[1])), secret: arr[2] }
}
export default async function Page() {
  // const dict = await getDictionary()
  const session = await getServerSession(authOptions)
  const jwt = await getServerSession(authOptions)
  const decoded = decodeJWT(session?.user?.access_token)

  console.log(`session: ${JSON.stringify(session)}`)
  console.log(`jwt: ${JSON.stringify(jwt)}`)
  console.log(`decoded: ${JSON.stringify(decoded.payload.user)}`)
  const preloadFormData = decoded.payload.user

  return (
    <Row className="justify-content-center">
      <Col md={6}>
        <Card className="mb-4 rounded-0">
          <CardBody className="p-4">
            <h1>Profile</h1>
            <p className="text-black-50 dark:text-gray-500">Update profile settings</p>
            <Profile preloadFormData={preloadFormData} />
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}
