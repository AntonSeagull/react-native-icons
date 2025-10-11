

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiListCheck = (props: IconProps) => {

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
          <Path  d="M4 7h11v2H4zm0 4h11v2H4zm0 4h7v2H4zm15.299-2.708-4.3 4.291-1.292-1.291-1.414 1.415 2.706 2.704 5.712-5.703z" />
        </G>
      </Svg>
    );
  }

