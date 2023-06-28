<?php require "partials/head.php"; ?>
<?php require "partials/nav.php"; ?>

<?php
if (!isset($_SESSION['login'])) {
  echo '<script>window.location.replace("/login");</script>';
  exit;
}
?>

<?php
$config = require "config.php";
$db = new Database($config['database']);
$lecturers = $db->connect("SELECT * FROM lecturers")->fetchAll(PDO::FETCH_ASSOC);
?>

<main>
  <div class="mx-auto max-w-2xl sm:px-6 lg:px-8">
    <div class="mt-8 flex items-center justify-center gap-x-6">
      <legend class="text-base font-semibold text-gray-900">All Lecturers</legend>
    </div>

    <div class="mt-8 flow-root">
      <div class="-mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table class="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">Name</th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">NIDN</th>
              </tr>
            </thead>
            <tbody class="bg-white">
              <?php
              foreach ($lecturers as $lecturer) :
                $NIDN = $lecturer['nidn'];
                $name = $lecturer['name_lct'];
              ?>
                <tr class="even:bg-gray-50">
                  <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3"><?= $name ?></td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"><?= $NIDN ?></td>
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