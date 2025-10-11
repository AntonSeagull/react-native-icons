

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiFlipboard = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M0 0v24h24V0H0zm19.2 9.6h-4.8v4.8H9.6v4.8H4.8V4.8h14.4v4.8z" />
        </G>
      </Svg>
    );
  }

