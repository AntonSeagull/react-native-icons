

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiUserFocusThin = (props: IconProps) => {

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
          <Path  d="M220,40V76a4,4,0,0,1-8,0V44H180a4,4,0,0,1,0-8h36A4,4,0,0,1,220,40Zm-4,136a4,4,0,0,0-4,4v32H180a4,4,0,0,0,0,8h36a4,4,0,0,0,4-4V180A4,4,0,0,0,216,176ZM76,212H44V180a4,4,0,0,0-8,0v36a4,4,0,0,0,4,4H76a4,4,0,0,0,0-8ZM40,80a4,4,0,0,0,4-4V44H76a4,4,0,0,0,0-8H40a4,4,0,0,0-4,4V76A4,4,0,0,0,40,80Zm136,92a4,4,0,0,1-3.2-1.6,56,56,0,0,0-89.6,0,4,4,0,1,1-6.4-4.8,63.65,63.65,0,0,1,32.5-22.85,36,36,0,1,1,37.4,0,63.65,63.65,0,0,1,32.5,22.85A4,4,0,0,1,176,172Zm-48-32a28,28,0,1,0-28-28A28,28,0,0,0,128,140Z" />
        </G>
      </Svg>
    );
  }

