

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiNotificationOff = (props: IconProps) => {

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
          <Path d="m21.71 20.296-1.786-1.786c.045-.163.076-.332.076-.51v-7h-2v5.586L7.414 6H13V4H6c-.178 0-.347.031-.51.076l-1.78-1.78L2.296 3.71l18 18 1.414-1.414zM4 8.121V18c0 1.103.897 2 2 2h9.879l-2-2H6v-7.879l-2-2z" />
        </G>
      </Svg>
    );
  }

