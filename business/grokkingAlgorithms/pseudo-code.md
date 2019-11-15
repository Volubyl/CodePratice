# Search

### Binary Search

The purpose of Binary Search is to search a value with a minimal amount of attemps.

#### Constraints

To not use any kind of mutation

#### Searching the base case

The base case could be an array of two values like `[1,2,3]` and the number to guess if `3`

NOTE : This algo only works with a sorted array

PseudoCode :

```md
BINARY_SEARCH {

    Take the MID_VALUE of the array

    IF the MID_VALUE is the VALUE_TO_GUESS
    THEN

    IF the MID_VALUE IS too high

    THEN CALL BINARY_SEARCH with a new array containing all the value BEFORE the MID_VALUE

    IF the MID_VALUE IS too LOW

    THEN CALL BINARY_SEARCH with a new array containing all the value AFTER the MID_VALUE

    return the MID_VALUE

}
```

# REVERSE

The purpose of Reverse Algorithm is to reverse the order of an array
