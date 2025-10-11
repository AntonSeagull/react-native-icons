

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const VscThreeBars = (props: IconProps) => {

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
          <Path  d="M14 5H2V3h12v2zm0 4H2V7h12v2zM2 13h12v-2H2v2z" fillRule="evenodd" clipRule="evenodd" />
        </G>
      </Svg>
    );
  }

