

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CiPower = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M6.638,5.209a8.782,8.782,0,1,0,13.917,8.96,8.871,8.871,0,0,0-3.189-8.96c-.5-.39-1.214.312-.707.707a7.93,7.93,0,0,1,3.082,7.113,7.787,7.787,0,0,1-15.308.956A7.9,7.9,0,0,1,7.345,5.916c.507-.394-.205-1.1-.707-.707Z" />
          <Path  d="M12.5,12.519a.5.5,0,0,1-1,0V3.548h0a.5.5,0,0,1,1,0Z" />
        </G>
      </Svg>
    );
  }

