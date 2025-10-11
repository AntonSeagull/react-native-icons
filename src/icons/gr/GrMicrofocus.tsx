

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrMicrofocus = (props: IconProps) => {

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
          <Path  fill="#0078EF" d="M1,5 L5,5 L5,19 L19,19 L19,23 L1,23 L1,5 Z M5,1 L23,1 L23,19 L19,19 L19,5 L5,5 L5,1 Z" fillRule="evenodd" />
        </G>
      </Svg>
    );
  }

