

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiSortAlphabetAsc = (props: IconProps) => {

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
          <Path  d="M4.86885 11H2.6665L6 3H8L11.3334 11H9.13113L8.7213 10H5.27869L4.86885 11ZM6.09836 8H7.90163L7 5.8L6.09836 8ZM18.9999 16V3H16.9999V16H13.9999L17.9999 21L21.9999 16H18.9999ZM10.9999 13H2.99992V15H7.85414L2.99992 19V21H10.9999V19H6.14605L10.9999 15V13Z" />
        </G>
      </Svg>
    );
  }

