// Bubble sort Implementation using Javascript

// Creating the bblSort function
function bblSort(arr) {

	for (let i = 0; i < arr.length; i++) {

		// Last i elements are already in place 
		for (let j = 0; j < (arr.length - i - 1); j++) {

			// Checking if the item at present iteration 
			// is greater than the next iteration
			if (arr[j] > arr[j + 1]) {

				// If the condition is true
				// then swap them
				let temp = arr[j]
				arr[j] = arr[j + 1]
				arr[j + 1] = temp
			}
		}
	}

	// Print the sorted array
	console.log(arr);
}

// This is our unsorted array
let arr = [122, 12, 24, 46, 2, 4, 88, 244];

bblSort(arr);
