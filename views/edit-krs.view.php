<?php require "partials/head.php"; ?>
<?php require "partials/nav.php"; ?>

<?php
if (!isset($_SESSION['login'])) {
  echo '<script>window.location.replace("/login");</script>';
  exit;
}
?>

<?php
$username = $_SESSION['username'];
$config = require "config.php";
$db = new Database($config['database']);
$tableTarget = ($_SESSION['typeUser'] == 'student') ? 'krs' : 'rpd';
$primaryKeyTarget = ($_SESSION['typeUser'] == 'student') ? 'nim' : 'nidn';
?>
<main>
  <div class="mx-auto max-w-2xl sm:px-6 lg:px-8">
    <div class="mt-8 flex items-center justify-center gap-x-6">
      <legend class="text-base font-semibold text-gray-900">Editing Your Courses as <?= ($_SESSION['typeUser'] == 'student') ? 'Student' : 'Lecturer' ?></legend>
    </div>

    <div class="mt-8 flow-root">
      <div class="-mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <form method='post' action=''>
            <table class="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">Name</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Code</th>
                </tr>
              </thead>
              <tbody class="bg-white">
                <?php
                $courses = $db->connect("SELECT * FROM courses");
                $selectedCourses = $db->connect("SELECT code_crs FROM $tableTarget WHERE $primaryKeyTarget = $username")->fetchAll(PDO::FETCH_COLUMN);
                $id = 0;
                foreach ($courses as $course) :
                  $code_crs = $course['code_crs'];
                  $name = $course['name_crs'];
                  $isChecked = in_array($code_crs, $selectedCourses) ? 'checked' : '';
                  $id++;
                ?>
                  <tr class="even:bg-gray-50">
                    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3"><label for="<?= $id ?>"><?= $name ?></label></td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"><label for="<?= $id ?>"><?= $code_crs ?></label></td>
                    <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                      <input id="<?= $id ?>" type='checkbox' name='selectedCourses[]' class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" value='<?= $code_crs ?>' <?= $isChecked ?>>
                    </td>
                  </tr>
                <?php endforeach; ?>
              </tbody>
            </table>
            <div class="my-8 flex items-center justify-center gap-x-6">
              <button type="submit" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</main>


<?php
if (isset($_POST['selectedCourses'])) {
  $selectedCourses = $_POST['selectedCourses'];

  $existingCourses = $db->connect("SELECT code_crs FROM $tableTarget WHERE $primaryKeyTarget = $username")->fetchAll(PDO::FETCH_COLUMN);


  // Remove duplicate courses from the selected courses
  $selectedCourses = array_unique($selectedCourses);

  // Check which courses need to be inserted or deleted
  $coursesToInsert = array_diff($selectedCourses, $existingCourses);
  $coursesToDelete = array_diff($existingCourses, $selectedCourses);

  // Insert new courses
  if (!empty($coursesToInsert)) {
    $insertQuery = "INSERT INTO $tableTarget ($primaryKeyTarget, code_crs) VALUES ";
    $insertValues = [];

    foreach ($coursesToInsert as $courseId) {
      $insertValues[] = "('$username', '$courseId')";
    }

    $insertQuery .= implode(',', $insertValues);

    $db->connect($insertQuery);
  }

  // Delete courses
  if (!empty($coursesToDelete)) {
    $deleteQuery = "DELETE FROM $tableTarget WHERE $primaryKeyTarget = $username AND code_crs IN ('";
    $deleteQuery .= implode("', '", $coursesToDelete);
    $deleteQuery .= "')";

    $db->connect($deleteQuery);
  }
  echo '<script>window.location.replace("/");</script>';
}
?>

<?php require "partials/footer.php"; ?>