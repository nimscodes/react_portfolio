export default function Navbar() {
    return (
        <nav class="flex justify-between items-center bg-">
            <div>
                <a>NimsCodes</a>
            </div>
            <ul class="flex">
                <li class="mr-6">
                    <a class="text-blue-500 hover:text-blue-800" href="#">Home</a>
                </li>
                <li class="mr-6">
                    <a class="text-blue-500 hover:text-blue-800" href="#">About</a>
                </li>
                <li class="mr-6">
                    <a class="text-blue-500 hover:text-blue-800" href="#">Link</a>
                </li>
                <li class="mr-6">
                    <a class="text-gray-400 cursor-not-allowed" href="#">Disabled</a>
                </li>
            </ul>
        </nav>
    );
}