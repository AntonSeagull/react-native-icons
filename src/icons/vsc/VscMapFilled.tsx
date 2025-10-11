

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const VscMapFilled = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M2 5.5V13L5.5 10.8125V3.3125L2 5.5Z" />
          <Path d="M9.5 12.6875V5.1875L6.5 3.3125V10.8125L9.5 12.6875Z" />
          <Path d="M10.5 12.6875V5.1875L14 3V10.5L10.5 12.6875Z" />
        </G>
      </Svg>
    );
  }

