import { ProfileForm } from 'features/users';
import { useUpdateUserMutation } from 'store/server-api';

export const Profile = (props) => {
	const { profile, onCompleteStep } = props;
	const [ updateUser ] = useUpdateUserMutation();

	const onProfileChange = (field, value) => {
		updateUser({
			id: profile.id,
			[field]: value
		});
	}

	return (
		<div className="profile-form-wrapper">
			<ProfileForm
				profile={profile}
				onChange={onProfileChange}
				onContinue={onCompleteStep}
			/>
		</div>
	);
}

export default Profile;