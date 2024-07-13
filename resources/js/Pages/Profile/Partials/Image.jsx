import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';

export default function Image({ mustVerifyEmail, status, className = '' }) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        image: " ",
      
       
    });
    

    const submit = (e) => {
        e.preventDefault();
        //patch(route('profile.add'));
        patch(route('profile.addImage'));
    };

    const handleImage = (e) => {
        setData('image', e.target.files[0])
    }

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Add Image</h2>

                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    IMAGE
                </p> 
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
           

                <div>
                    <input type="file" onChange={handleImage} />
                    {errors.image && <InputError message={errors.image} className='mt-2'></InputError>}
                </div>
                  
                
                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600 dark:text-gray-400">Saved.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}

/*

  <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={data.biography}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                        isFocused
                        autoComplete="name"
                    />

                    <InputError className="mt-2" message={errors.name} />
                    */