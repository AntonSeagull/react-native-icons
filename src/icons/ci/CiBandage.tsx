

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CiBandage = (props: IconProps) => {

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
          <Path d="M17.435,7.5H6.565a4.5,4.5,0,0,0,0,9h10.87a4.5,4.5,0,0,0,0-9Zm-9.93,8h-.94a3.5,3.5,0,0,1,0-7h.94Zm8,0h-7v-7h7Zm1.93,0h-.93v-7h.93a3.5,3.5,0,0,1,0,7Z" />
        </G>
      </Svg>
    );
  }

