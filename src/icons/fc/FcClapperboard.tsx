

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcClapperboard = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 48 48"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 24, 24)`}
      >
        <G fill={color} stroke={color}>
          <Path  fill="#3F51B5" d="M43.4,8.3L4,15l-0.3-2c-0.4-2.2,1.1-4.2,3.3-4.6l31.6-5.3c2.2-0.4,4.2,1.1,4.6,3.3L43.4,8.3z" />
          <Path  fill="#3F51B5" d="M40,41H8c-2.2,0-4-1.8-4-4V15h40v22C44,39.2,42.2,41,40,41z" />
        </G>
      </Svg>
    );
  }

