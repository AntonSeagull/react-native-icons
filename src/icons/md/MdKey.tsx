

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdKey = (props: IconProps) => {

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
          <Path  d="M21,10h-8.35C11.83,7.67,9.61,6,7,6c-3.31,0-6,2.69-6,6s2.69,6,6,6c2.61,0,4.83-1.67,5.65-4H13l2,2l2-2l2,2l4-4.04L21,10z M7,15c-1.65,0-3-1.35-3-3c0-1.65,1.35-3,3-3s3,1.35,3,3C10,13.65,8.65,15,7,15z" />
        </G>
      </Svg>
    );
  }

