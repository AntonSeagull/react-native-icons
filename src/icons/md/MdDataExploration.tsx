

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdDataExploration = (props: IconProps) => {

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
          <Path  d="M12,2C6.48,2,2,6.48,2,12c0,1.33,0.26,2.61,0.74,3.77L8,10.5l3.3,2.78L14.58,10H13V8h5v5h-2v-1.58L11.41,16l-3.29-2.79 l-4.4,4.4C5.52,20.26,8.56,22,12,22h8c1.1,0,2-0.9,2-2v-8C22,6.48,17.52,2,12,2z M19.5,20.5c-0.55,0-1-0.45-1-1s0.45-1,1-1 s1,0.45,1,1S20.05,20.5,19.5,20.5z" />
        </G>
      </Svg>
    );
  }

