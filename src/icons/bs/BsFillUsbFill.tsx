

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BsFillUsbFill = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 8, 8)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M.5 5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5zm1.75 1.5h11.5a.25.25 0 0 1 .25.25v1a.25.25 0 0 1-.25.25H2.25A.25.25 0 0 1 2 7.75v-1a.25.25 0 0 1 .25-.25" />
        </G>
      </Svg>
    );
  }

