<?php require "partials/head.php"; ?>
<?php require "partials/nav.php"; ?>
<?php //require "partials/banner.php"; 
?>

<?php
// $nim = $_GET['nim'];
$nim = '01234567';
$config = require "config.php";
$db = new Database($config['database']);
$courses = $db->connect("SELECT * FROM courses INNER JOIN krs ON courses.code_crs = krs.code_crs WHERE krs.nim = '$nim' ORDER BY courses.code_crs")->fetchAll(PDO::FETCH_ASSOC);
?>
<main>
  <div class="mx-auto max-w-2xl sm:px-6 lg:px-8">
    <div class="mt-8 flex items-center justify-center gap-x-6">
      <legend class="text-base font-semibold text-gray-900">Your Courses</legend>
    </div>

    <div class="mt-8 flow-root">
      <div class="-mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table class="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">Name</th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Code</th>
                <th scope="col" class="py-3.5 text-sm font-semibold text-indigo-600 hover:text-indigo-900"><a href="/edit-krs">Edit`</a></th>
              </tr>
            </thead>
            <tbody class="bg-white">
              <?php
              foreach ($courses as $course) :
                $code_crs = $course['code_crs'];
                $name = $course['name_crs'];
              ?>
                <tr class="even:bg-gray-50">
                  <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3"><?= $name ?></td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"><?= $code_crs ?></td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"></td>
                </tr>
              <?php endforeach; ?>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</main>

<?php require "partials/footer.php"; ?>