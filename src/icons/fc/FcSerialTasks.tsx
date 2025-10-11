

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcSerialTasks = (props: IconProps) => {

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
          <Path d="M33,9H11v4h22c1.1,0,2,0.9,2,2v20H23v4h16V15C39,11.7,36.3,9,33,9z" fill="#90CAF9" />
        </G>
      </Svg>
    );
  }

