<script lang="ts">
</script>

<div class="flex justify-center content-center w-full pb-16 px-8 pt-16 sm:pt-8">
	<form class="w-full max-w-xl" method="post" enctype="multipart/form-data">
		<div class="mb-6">
			<label for="name" class="block mb-2 text-sm font-bold text-slate-900 dark:text-slate-200"
				>Name</label
			>
			<input
				name="name"
				id="name"
				class="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
				placeholder="Name"
				required
			/>
		</div>
		<div class="mb-6">
			<label for="username" class="block mb-2 text-sm font-bold text-slate-900 dark:text-slate-200"
				>Username</label
			>
			<input
				name="username"
				id="username"
				class="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
				placeholder="Username"
				required
			/>
		</div>
		<div class="mb-6">
			<label for="password" class="block mb-2 text-sm font-bold text-slate-900 dark:text-slate-200"
				>Password</label
			>
			<input
				name="password"
				type="password"
				id="password"
				class="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
				placeholder=""
				required
			/>
		</div>
		<div class="mb-6">
			<label for="phone" class="block mb-2 text-sm font-bold text-slate-900 dark:text-slate-200"
				>Phone Number</label
			>
			<input
				name="phone"
				id="phone"
				class="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
				placeholder="0xx-xxx-xxxx"
				required
			/>
		</div>
		<div class="mb-6">
			<label for="id_no" class="block mb-2 text-sm font-bold text-slate-900 dark:text-slate-200"
				>ID card No.</label
			>
			<input
				name="id_no"
				id="id_no"
				class="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
				placeholder=""
				required
			/>
		</div>
		<div class="mb-6">
			<label for="school" class="block mb-2 text-sm font-bold text-slate-900 dark:text-slate-200"
				>School</label
			>
			<input
				name="school"
				id="school"
				class="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
				placeholder=""
				required
			/>
		</div>

		<button
			type="submit"
			class="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-bold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
			>Register</button
		>
		<div class="my-6">
			<p class="text-md font-bold text-slate-500 dark:text-slate-400">
				Already have an account? <a
					href="/login"
					class="font-bold text-slate-700 hover:underline dark:text-slate-200">Login here</a
				>
			</p>
		</div>
	</form>
</div>
