<script setup>

import AppSidebar from '~/components/AppSidebar.vue';

</script>

<template>
    <div class="flex">
        <AppSidebar />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css">

        <div class="mt-6 p-6 w-full ">
            <div class="flex justify-between">
                <div class="w-xl ">
                    <h2 class="text-3xl font-mono">
                        Attendance Management
                    </h2>
                    <p>Analya attendance record of employee</p>
                </div>
                <div class="bg-blue-500 p-4 rounded-lg mr-1 text-white text-xl">
                    Download
                    <i class="fa-solid fa-cloud-arrow-down"></i>
                </div>
            </div>
            <div class="flex justify-between mt-10">
                <div class="border bg-white p-10 rounded-xl  ">
                    <div class="flex mr-25">
                        <div class="border rounded-lg p-1"><i class="fa-regular fa-circle-check"></i></div>
                        <div class="px-4 mt-1 text-xl">Present Today</div>
                    </div> <br>
                    <div class="py-1 text-xl">40</div>
                    <div class="py-1 text-xl">124 People Remaining</div>
                </div>
                <div class="border p-10 rounded-xl ">
                    <div class="flex mr-25">
                        <div class="border rounded-lg p-1"><i class="fa-regular fa-clock"></i></div>
                        <div class="px-4 mt-1 text-xl">Lates Entry .....</div>
                    </div> <br>
                    <div class="py-1 text-xl">28</div>
                    <div class="py-1 text-xl">12 People are on time</div>
                </div>
                <div class="border p-10 rounded-xl ">
                    <div class="flex mr-25">
                        <div class="border rounded-lg p-1"><i class="fa-chisel fa-regular fa-leaf"></i></div>
                        <div class="px-4 mt-1 text-xl">On Leaves .....</div>
                    </div> <br>
                    <div class="py-1 text-xl">04</div>
                    <div class="py-1 text-xl">Approved leave</div>
                </div>
                <div class="border p-10 rounded-xl ">
                    <div class="flex mr-25">
                        <div class="border rounded-lg p-1"><i class="fa-regular fa-face-frown"></i></div>
                        <div class="px-4 mt-1 text-xl">Absents .....</div>
                    </div> <br>
                    <div class="py-1 text-xl">01</div>
                    <div class="py-1 text-xl">Without informing</div>
                </div>
            </div>
            <div class="w-full flex mt-10">
                <button class="bg-blue-500 p-4 rounded-lg mr-1 text-white text-xl">Leaves
                    <i class="fa-solid fa-xmark"></i>
                </button>

                <button class="bg-blue-500 p-4 rounded-lg mr-1 text-white text-xl">Absents
                    <i class="fa-solid fa-xmark"></i>
                </button>
                <button class="bg-blue-500 p-4 rounded-lg mr-1 text-white text-xl">Actives
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
            <div class="border mt-15"></div>
            <div class="flex mt-5 text-xl justify-between text-center align-center">
                <div class="">Employee</div>
                <div class="">Sunday</div>
                <div class="">Monday</div>
                <div class="">Tuesday</div>
                <div class="">Wednesday</div>
                <div class="">Thursday</div>
                <div class="">Friday</div>
                <div class="mr-20">Saturday</div>
            </div>
            <div class="border mt-7"></div>
            <div class="flex">
                <div class="flex gap-4 border p-5">
                    <div class="w-15 border rounded-xl "><img class="rounded-xl w-full h-full"
                            src="https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM="
                            alt=""></div>
                    <div class="mt-2">Bora Russell <br> UX/UI Designer</div>
                </div>
                <div class="border p-5 px-11">
                    4
                    <div class="flex w-25 gap-2 mt-2 bg-green-100 p-1 rounded-lg">
                        <div class=""><i class="fa-regular fa-circle-check"></i></div>
                        <div class="">8 Hours</div>
                    </div>
                </div>
                <div class="border p-5 px-11">
                    5
                    <div class="flex w-25 gap-2 mt-2 bg-orange-100 p-1 rounded-lg">
                        <div class=""><i class="fa-solid fa-circle-exclamation"></i></div>
                        <div class="">4h 36mn</div>
                    </div>
                </div>
                <div class="border p-5 px-11">
                    6
                    <div class="flex w-25 gap-2 mt-2 bg-purple-100 p-1 rounded-lg">
                        <div class=""><i class="fa-regular fa-face-frown"></i></div>
                        <div class="">Leave</div>
                    </div>
                </div>
                <div class="border p-5 px-11">
                    7
                    <div class="flex w-25 gap-2 mt-2 bg-green-100 p-1 rounded-lg">
                        <div class=""><i class="fa-regular fa-circle-check"></i></div>
                        <div class="">8h 40mn</div>
                    </div>
                </div>
                <div class="border p-5 px-11">
                    8
                    <div class="flex w-25 gap-2 mt-2 bg-green-100 p-1 rounded-lg">
                        <div class=""><i class="fa-regular fa-circle-check"></i></div>
                        <div class="">Active</div>
                    </div>
                </div>
                <div class="border p-5 px-14">
                    9
                    <div class="flex w-25 gap-2 mt-2 bg-white p-1 rounded-lg">
                    </div>
                </div>
                <div class=" p-5 px-11">
                    10
                    <div class="flex w-25 gap-2 mt-2 bg-white p-1 rounded-lg">

                    </div>
                </div>
            </div>
            <div class="flex">
                <div class="flex gap-4 border p-5">
                    <div class="w-15 border rounded-xl "><img class="rounded-xl w-full h-full"
                            src="https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg="
                            alt=""></div>
                    <div class="mt-2">Sithul Coco <br> UX/UI Designer</div>
                </div>
                <div class="border p-5 px-11">
                    4
                    <div class="flex w-25 gap-2 mt-2 bg-orange-100 p-1 rounded-lg">
                        <div class=""><i class="fa-solid fa-circle-exclamation"></i></div>
                        <div class="">6h 24mn</div>
                    </div>
                </div>
                <div class="border p-5 px-11">
                    5
                    <div class="flex w-25 gap-2 mt-2 bg-green-100 p-1 rounded-lg">
                        <div class=""><i class="fa-regular fa-circle-check"></i></div>
                        <div class="">8h 40mn</div>
                    </div>
                </div>
                <div class="border p-5 px-11">
                    6
                    <div class="flex w-25 gap-2 mt-2 bg-green-100 p-1 rounded-lg">
                        <div class=""><i class="fa-regular fa-circle-check"></i></div>
                        <div class="">8 Hours</div>
                    </div>
                </div>
                <div class="border p-5 px-11">
                    7
                    <div class="flex w-25 gap-2 mt-2 bg-red-100 p-1 rounded-lg">
                        <div class=""><i class="fa-regular fa-circle-xmark"></i></div>
                        <div class="">Absent</div>
                    </div>
                </div>
                <div class="border p-5 px-11">
                    8
                    <div class="flex w-25 gap-2 mt-2 bg-green-100 p-1 rounded-lg">
                        <div class=""><i class="fa-regular fa-circle-check"></i></div>
                        <div class="">Active</div>
                    </div>
                </div>
                <div class="border p-5 px-14">
                    9
                    <div class="flex w-25 gap-2 mt-2 bg-white p-1 rounded-lg">
                    </div>
                </div>
                <div class=" p-5 px-11">
                    10
                    <div class="flex w-25 gap-2 mt-2 bg-white p-1 rounded-lg">

                    </div>
                </div>
            </div>
            <div class="flex">
                <div class="flex gap-4 border p-5">
                    <div class="w-15 border rounded-xl "><img class="rounded-xl w-full h-full"
                            src="https://st2.depositphotos.com/1594308/8523/i/450/depositphotos_85237228-stock-photo-happy-businessman-with-touchpad.jpg"
                            alt=""></div>
                    <div class="mt-2">Brooklyn <br>UX/UI Designer</div>
                </div>
                <div class="border p-5 px-11">
                    4
                    <div class="flex w-25 gap-2 mt-2 bg-green-100 p-1 rounded-lg">
                        <div class=""><i class="fa-regular fa-circle-check"></i></div>
                        <div class="">8 Hours</div>
                    </div>
                </div>
                <div class="border p-5 px-11">
                    5
                    <div class="flex w-25 gap-2 mt-2 bg-green-100 p-1 rounded-lg">
                        <div class=""><i class="fa-regular fa-circle-check"></i></div>
                        <div class="">8h 15mn</div>
                    </div>
                </div>
                <div class="border p-5 px-11">
                    6
                    <div class="flex w-25 gap-2 mt-2 bg-orange-100 p-1 rounded-lg">
                        <div class=""><i class="fa-solid fa-circle-exclamation"></i></div>
                        <div class="">5h 17mn</div>
                    </div>
                </div>
                <div class="border p-5 px-11">
                    7
                    <div class="flex w-25 gap-2 mt-2 bg-green-100 p-1 rounded-lg">
                        <div class=""><i class="fa-regular fa-circle-check"></i></div>
                        <div class="">8 Hours</div>
                    </div>
                </div>
                <div class="border p-5 px-11">
                    8
                    <div class="flex w-25 gap-2 mt-2 bg-purple-100 p-1 rounded-lg">
                        <div class=""><i class="fa-regular fa-face-frown"></i></div>
                        <div class="">Leave</div>
                    </div>
                </div>
                <div class="border p-5 px-14">
                    9
                    <div class="flex w-25 gap-2 mt-2 bg-white p-1 rounded-lg">
                    </div>
                </div>
                <div class=" p-5 px-11">
                    10
                    <div class="flex w-15 gap-2 mt-2 bg-white p-1 rounded-lg">

                    </div>
                </div>
            </div>
            <div class="flex">
                <div class="flex gap-4 border p-5">
                    <div class="w-15 border rounded-xl "><img class="rounded-xl w-full h-full"
                            src="https://d2j2uxe7jasn0r.cloudfront.net/thumbnails/image/rDtN98Qoishumwih/WM2A4916-1352_thumb.jpg"
                            alt=""></div>
                    <div class="mt-2">Eleanor Pena <br> UX/UI Designer</div>
                </div>
                <div class="border p-5 px-11">
                    4
                    <div class="flex w-25 gap-2 mt-2 bg-green-100 p-1 rounded-lg">
                        <div class=""><i class="fa-regular fa-circle-check"></i></div>
                        <div class="">8h 15mn</div>
                    </div>
                </div>
                <div class="border p-5 px-11">
                    5
                    <div class="flex w-25 gap-2 mt-2 bg-green-100 p-1 rounded-lg">
                        <div class=""><i class="fa-regular fa-circle-check"></i></div>
                        <div class="">8h 40mn</div>
                    </div>
                </div>
                <div class="border p-5 px-11">
                    6
                    <div class="flex w-25 gap-2 mt-2 bg-green-100 p-1 rounded-lg">
                        <div class=""><i class="fa-regular fa-circle-check"></i></div>
                        <div class="">8h 23mn</div>
                    </div>
                </div>
                <div class="border p-5 px-11">
                    7
                    <div class="flex w-25 gap-2 mt-2 bg-orange-100 p-1 rounded-lg">
                        <div class=""><i class="fa-solid fa-circle-exclamation"></i></div>
                        <div class="">4h 36mn</div>
                    </div>
                </div>
                <div class="border p-5 px-11">
                    8
                    <div class="flex w-25 gap-2 mt-2 bg-green-100 p-1 rounded-lg">
                        <div class=""><i class="fa-regular fa-circle-check"></i></div>
                        <div class="">Active</div>
                    </div>
                </div>
                <div class="border p-5 px-14">
                    9
                    <div class="flex w-25 gap-2 mt-2 bg-white p-1 rounded-lg">
                    </div>
                </div>
                <div class=" p-5 px-11">
                    10
                    <div class="flex w-25 gap-2 mt-2 bg-white p-1 rounded-lg">

                    </div>
                </div>
            </div>
            <div class="flex">
                <div class="flex gap-4 border p-5">
                    <div class="w-25 border rounded-xl "><img class="rounded-xl w-full h-full"
                            src="https://img.freepik.com/free-photo/close-up-positive-executive-work_1098-519.jpg?semt=ais_rp_progressive&w=740&q=80 "
                            alt=""></div>
                    <div class="mt-2">Darlane Robert <br> UX Engineer</div>
                </div>
                <div class="border p-5 px-11">
                    4
                    <div class="flex w-25 gap-2 mt-2 bg-green-100 p-1 rounded-lg">
                        <div class=""><i class="fa-regular fa-circle-check"></i></div>
                        <div class="">8 Hours</div>
                    </div>
                </div>
                <div class="border p-5 px-11">
                    5
                    <div class="flex w-25 gap-2 mt-2 bg-orange-100 p-1 rounded-lg">
                        <div class=""><i class="fa-solid fa-circle-exclamation"></i></div>
                        <div class="">5h 17mn</div>
                    </div>
                </div>
                <div class="border p-5 px-11">
                    6
                    <div class="flex w-25 gap-2 mt-2 bg-orange-100 p-1 rounded-lg">
                        <div class=""><i class="fa-solid fa-circle-exclamation"></i></div>
                        <div class="">5h 17mn</div>
                    </div>
                </div>
                <div class="border p-5 px-11">
                    7
                    <div class="flex w-25 gap-2 mt-2 bg-purple-100 p-1 rounded-lg">
                        <div class=""><i class="fa-regular fa-face-frown"></i></div>
                        <div class="">Leave</div>
                    </div>
                </div>
                <div class="border p-5 px-11">
                    8
                    <div class="flex w-25 gap-2 mt-2 bg-green-100 p-1 rounded-lg">
                        <div class=""><i class="fa-regular fa-circle-check"></i></div>
                        <div class="">Active</div>
                    </div>
                </div>
                <div class="border p-5 px-14">
                    9
                    <div class="flex w-25 gap-2 mt-2 bg-white p-1 rounded-lg">
                    </div>
                </div>
                <div class=" p-5 px-11">
                    10
                    <div class="flex w-25 gap-2 mt-2 bg-white p-1 rounded-lg">

                    </div>
                </div>
            </div>

            <div class="border"></div>
        </div>
    </div>


</template>
