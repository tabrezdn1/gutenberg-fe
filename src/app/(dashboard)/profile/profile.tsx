'use client'

import {
  Alert, Button, Form, FormControl, InputGroup,
} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons'
import { faLock, faFile, faImage } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import InputGroupText from 'react-bootstrap/InputGroupText'
import useDictionary from '@/locales/dictionary-hook'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/option'
import { User } from '../../../models/user'

// type ProfileObject = {
//   email: string;
//   nickname: string,
//   first_name: string,
//   last_name:string,
//   bio: string,
//   profile_picture_url: string,
//   linkedin_profile_url: string,
//   github_profile_url: string,
//   role: string
// };

export default function Profile(params: User) {
  const router = useRouter()
  const dict = useDictionary()
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [currentProfile, setCurrentProfile] = useState<User>()

  const [updatedProfile, setUpdatedProfile] = useState<User>({
    firstName: "",
    lastName: "",
    email: "",
  })
  const profileUpdate = async (formData1: FormData) => {
    setSubmitting(true)

    try {
      const res: Response = await fetch('http://localhost:8000/user/', {
        cache: 'no-cache',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData1.get('email'),
          role: 'ANONYMOUS',
          password: formData1.get('password'),
          bio: formData1.get('bio'),
          first_name: formData1.get('firstName'),
          last_name: formData1.get('lastName'),
          profile_picture_url: formData1.get('profilePictureUrl'),
          github_profile_url: formData1.get('githubProfileUrl'),
          linkedin_profile_url: formData1.get('linkedinProfileUrl'),
        }),
      })

      if (!res) {
        setError('Register failed')
        return
      }

      const { ok } = res

      if (!ok) {
        setError('Register failed')
        return
      }

      // Redirect on success
      router.push('/login')
      // redirect('/login')
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
      }
    } finally {
      setSubmitting(false)
    }
  }
  const firstNameInputRef = useRef<HTMLInputElement>(null)
  const lastNameInputRef = useRef<HTMLInputElement>(null)
  const emailInputRef = useRef<HTMLInputElement>(null)
  const bioInputRef = useRef<HTMLTextAreaElement>(null)
  const nicknameInputRef = useRef<HTMLInputElement>(null)
  const profilePictureUrlInputRef = useRef<HTMLInputElement>(null)
  const linkedInProfileUrlInputRef = useRef<HTMLInputElement>(null)
  const githubProfileUrlInputRef = useRef<HTMLInputElement>(null)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {


  }

  useEffect(() => {
    setCurrentProfile(params.preloadFormData)
  }, [params.preloadFormData])

  useEffect(() => {
    if (firstNameInputRef.current) {
      firstNameInputRef.current.value = currentProfile?.first_name || ''
    }
    if (lastNameInputRef.current) {
      lastNameInputRef.current.value = currentProfile?.last_name || ''
    }
    if (emailInputRef.current) {
      emailInputRef.current.value = currentProfile?.email || ''
    }
    if (bioInputRef.current) {
      bioInputRef.current.value = currentProfile?.bio || ''
    }
    if (nicknameInputRef.current) {
      nicknameInputRef.current.value = currentProfile?.nickname || ''
    }
    if (profilePictureUrlInputRef.current) {
      profilePictureUrlInputRef.current.value = currentProfile?.profile_picture_url || ''
    }
    if (githubProfileUrlInputRef.current) {
      githubProfileUrlInputRef.current.value = currentProfile?.github_profile_url || ''
    }
    if (linkedInProfileUrlInputRef.current) {
      linkedInProfileUrlInputRef.current.value = currentProfile?.linkedin_profile_url || ''
    }
  }, [
    currentProfile?.first_name,
    currentProfile?.last_name,
    currentProfile?.email,
    currentProfile?.bio,
    currentProfile?.nickname,
    currentProfile?.profile_picture_url,
    currentProfile?.github_profile_url,
    currentProfile?.linkedin_profile_url,
  ])

  return (
    <>
      <Alert variant="danger" show={error !== ''} onClose={() => setError('')} dismissible>{error}</Alert>
      <Form action={profileUpdate}>
        {/* {JSON.stringify(currentProfile)} */}

        <InputGroup className="mb-3">
          <InputGroup.Text>
            <FontAwesomeIcon icon={faUser} fixedWidth />
            First name
          </InputGroup.Text>
          <FormControl
            id="first-name"
            ref={firstNameInputRef}
            name="firstName"
            onChange={handleChange}
            disabled={submitting}
            placeholder="First name"
            aria-label="first-name"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text>
            <FontAwesomeIcon icon={faUser} fixedWidth />
            Last name
          </InputGroup.Text>
          <FormControl
            ref={lastNameInputRef}
            name="lastName"
            onChange={handleChange}
            disabled={submitting}
            placeholder="Last Name"
            aria-label="last-name"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text>
            <FontAwesomeIcon icon={faUser} fixedWidth />
            Nickname
          </InputGroup.Text>
          <FormControl
            ref={nicknameInputRef}
            name="username"
            onChange={handleChange}
            disabled={submitting}
            placeholder={dict.signup.form.username}
            aria-label="Username"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text>
            <FontAwesomeIcon icon={faEnvelope} fixedWidth />
            Email
          </InputGroup.Text>
          <FormControl
            ref={emailInputRef}
            type="email"
            name="email"
            onChange={handleChange}
            disabled={submitting}
            placeholder={dict.signup.form.email}
            aria-label="Email"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text>
            <FontAwesomeIcon icon={faFile} fixedWidth />
            Bio
          </InputGroup.Text>
          <FormControl
            ref={bioInputRef}
            as="textarea"
            name="bio"
            onChange={handleChange}
            disabled={submitting}
            placeholder="Bio"
            aria-label="bio"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text>
            <FontAwesomeIcon icon={faImage} fixedWidth />
            Profile picture URL
          </InputGroup.Text>
          <FormControl
            ref={profilePictureUrlInputRef}
            name="profilePictureUrl"
            onChange={handleChange}
            disabled={submitting}
            placeholder="Profile picture url"
            aria-label="profile-picture-url"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text>
            <FontAwesomeIcon icon={faUser} fixedWidth />
            Github Profile URL
          </InputGroup.Text>
          <FormControl
            ref={githubProfileUrlInputRef}
            name="githubProfileUrl"
            disabled={submitting}
            placeholder="Github profile url"
            aria-label="github-profile-url"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text>
            <FontAwesomeIcon icon={faUser} fixedWidth />
            LinkedIn Profile URL
          </InputGroup.Text>
          <FormControl
            ref={linkedInProfileUrlInputRef}
            name="linkedinProfileUrl"
            disabled={submitting}
            placeholder="LinkedIn profile url"
            aria-label="linkedin-profile-url"
          />
        </InputGroup>

        <div className="py-2">
          <Button type="submit" className="d-block w-100 py-2" disabled={submitting} variant="success">
            Update
          </Button>
        </div>

        <Button className="d-block w-100" disabled={submitting} variant="secondary"><a className="text-white" href="/">Go Back</a></Button>
      </Form>
    </>
  )
}
