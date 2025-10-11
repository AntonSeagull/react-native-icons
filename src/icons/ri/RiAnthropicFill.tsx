

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiAnthropicFill = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M16.7645 5H13.4568L19.3799 20H22.6107L16.7645 5ZM7.22604 5L1.37988 20H4.68758L5.99527 16.8462H12.1491L13.3799 19.9231H16.6876L10.6876 5H7.30296H7.22604ZM6.91834 14.0769L8.91834 8.76923L10.9953 14.0769H6.99527H6.91834Z" />
        </G>
      </Svg>
    );
  }

