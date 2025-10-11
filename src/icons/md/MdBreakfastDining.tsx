

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdBreakfastDining = (props: IconProps) => {

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
          <Path  d="M18,3H6C3.79,3,2,4.79,2,7c0,1.48,0.81,2.75,2,3.45V19c0,1.1,0.9,2,2,2h12 c1.1,0,2-0.9,2-2v-8.55c1.19-0.69,2-1.97,2-3.45C22,4.79,20.21,3,18,3z M14,15h-4v-4h4V15z" fillRule="evenodd" />
        </G>
      </Svg>
    );
  }

