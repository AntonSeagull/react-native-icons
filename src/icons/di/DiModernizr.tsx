

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const DiModernizr = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 32 32"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M0.321 23.812v-5.018h5.017v-5.017h5.017v-5.017h5.017v15.052zM16.627 8.76c8.313 0 15.052 6.739 15.052 15.052h-15.052v-15.052z" fill="#444444" />
        </G>
      </Svg>
    );
  }

