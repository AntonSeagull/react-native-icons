

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcDoNotInsert = (props: IconProps) => {

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
          <Path d="M42,18c-3.3,0-6,2.7-6,6v12c0,1.1-0.9,2-2,2H14c-1.1,0-2-0.9-2-2V24c0-3.3-2.7-6-6-6H4v4h2c1.1,0,2,0.9,2,2 v12c0,3.3,2.7,6,6,6h20c3.3,0,6-2.7,6-6V24c0-1.1,0.9-2,2-2h2v-4H42z" />
        </G>
      </Svg>
    );
  }

