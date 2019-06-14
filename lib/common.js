function Concatenate(arrayOne, arrayTwo) 
{
    var mergedArray = new Uint8Array(arrayOne.length + arrayTwo.length);
    
    mergedArray.set(arrayOne);
    
    mergedArray.set(arrayTwo, arrayOne.length);

    return new buffer.SlowBuffer(mergedArray);
}

function ConvertToArray(x)
{
    return Array.prototype.slice.call(x, 0);
}