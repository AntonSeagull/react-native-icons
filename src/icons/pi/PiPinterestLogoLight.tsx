

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiPinterestLogoLight = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 128, 128)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M222,112c0,22.05-7.7,42.19-21.68,56.73C187.32,182.25,169.71,190,152,190c-19.42,0-31.55-7.07-38.63-13.64l-11.53,49A6,6,0,0,1,96,230a5.89,5.89,0,0,1-1.37-.16,6,6,0,0,1-4.47-7.21l32-136a6,6,0,1,1,11.68,2.74L116.75,162c2.8,4.33,12.46,16,35.25,16,28.51,0,58-24.69,58-66A74,74,0,1,0,71.9,149a6,6,0,1,1-10.39,6A86,86,0,1,1,222,112Z" />
        </G>
      </Svg>
    );
  }

