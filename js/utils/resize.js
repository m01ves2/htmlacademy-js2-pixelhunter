export const resize = (frame, given) => {
  let ratioWidth = given.width / frame.width;
  let ratioHeight = given.height / frame.height;
  let actual = {};

  if(ratioWidth >= ratioHeight){
    actual.width = frame.width;
    actual.height = given.height / ratioWidth;
  }
  else{
    actual.height = frame.height;
    actual.width = given.width / ratioHeight;
  }
  return actual;
}
