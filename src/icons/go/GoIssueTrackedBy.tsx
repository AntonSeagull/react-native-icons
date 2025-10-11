

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GoIssueTrackedBy = (props: IconProps) => {

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
          <Path d="M12 2.5a9.5 9.5 0 1 0 0 19 .75.75 0 0 1 0 1.5C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11a.75.75 0 0 1-1.5 0A9.5 9.5 0 0 0 12 2.5Z" />
          <Path d="m13.759 17.48 3.728 3.314a.308.308 0 0 0 .513-.23V18h4.25a.75.75 0 0 0 0-1.5H18v-2.564a.308.308 0 0 0-.513-.23L13.76 17.02a.308.308 0 0 0 0 .46ZM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
        </G>
      </Svg>
    );
  }

