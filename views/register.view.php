<?php require "partials/head.php"; ?>

<main>
  <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company">
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Register your account</h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" action='' method='POST'>
          <div>
            <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Username</label>
            <div class="mt-2">
              <input id="username" name="username" type="text" autocomplete="username" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
            </div>
            <div class="mt-2">
              <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label for="confirm_password" class="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
            </div>
            <div class="mt-2">
              <input id="confirm_password" name="confirm_password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
          </div>

          <!-- Type -->
          <p class="text-sm text-gray-500">Who are you?</p>
          <legend class="sr-only">Type</legend>
          <div class="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
            <div class="flex items-center">
              <input id="student" name="type" type="radio" value="student" required class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600">
              <label for="student" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Student</label>
            </div>
            <div class="flex items-center">
              <input id="lecturer" name="type" type="radio" value="lecturer" required class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600">
              <label for="lecturer" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Lecturer</label>
            </div>
          </div>
          <!-- Type -->

          <div>
            <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Register</button>
          </div>
        </form>

        <p class="mt-10 text-center text-sm text-gray-500">
          Already a member?
          <a href="/login" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign in</a>
        </p>
      </div>
    </div>
  </div>
</main>

<?php
if (isset($_POST['username']) && isset($_POST['password']) && isset($_POST['confirm_password']) && isset($_POST['type'])) {
  $config = require "config.php";
  $db = new Database($config['database']);
  $registration_message = registration($_POST, $db);
  if ($registration_message !== "Registration success") {
    echo "<script>alert('$registration_message');</script>";
    echo '<script>window.location.replace("/register");</script>';
  } else {
    echo '<script>window.location.replace("/login");</script>';
  }
}
?>

<?php require "partials/footer.php"; ?>