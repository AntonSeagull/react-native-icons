

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiErmine = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M256 24l-32 64 32 48 32-48-32-64zm-64 96l-64 32 64 32 48-32-48-32zm128 0l-48 32 48 32 64-32-64-32zm-64 32c-32 128-64 192-128 256 16 0 48 0 64-16 0 16-16 48-32 64 16 0 48 0 64-16 16 16 16 16 32 48 16-32 16-32 32-48 16.847 12.064 48 16 64 16-16-16-32-48-32-64 16 16 48 16 64 16-64-64-96-128-128-256z" fill="#000" />
        </G>
      </Svg>
    );
  }

