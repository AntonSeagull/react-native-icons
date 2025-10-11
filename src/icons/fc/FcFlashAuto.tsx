

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcFlashAuto = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 48 48"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M40.8,14.5h-4.3L35.6,17H33l4.5-12h2.3l4.5,12h-2.6L40.8,14.5z M37.1,12.5h3L38.6,8L37.1,12.5z" fill="#F44336" />
        </G>
      </Svg>
    );
  }

